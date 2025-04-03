import { ChangeEvent, useEffect, useState } from 'react'
import {
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  debounceTime,
  switchMap
} from 'rxjs'
import { RefObject } from 'react'
import { DisplayItem } from '../types/displayItem'
import { fetchRepositories } from '../utils/fetchRepositories'

export const useGithubSearch = (
  inputRef: RefObject<HTMLInputElement | null>
) => {
  const [results, setResults] = useState<DisplayItem[]>([])
  useEffect(() => {
    if (!inputRef.current) return

    const subscription = fromEvent<ChangeEvent<HTMLInputElement>>(
      inputRef.current,
      'input'
    )
      .pipe(
        map((e) => e.target.value.trim()),
        filter((value: string) => value.length > 3),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((value: string) =>
          fetchRepositories(value).then((data) =>
            data.items.map((item) => ({
              id: item.id,
              name: item.name,
              description: item.description || 'No description provided',
              avatarUrl: item.owner.avatar_url,
              url: item.owner.html_url,
              fullName: item.full_name
            }))
          )
        )
      )
      .subscribe(setResults)

    return () => subscription.unsubscribe()
  }, [inputRef])

  return results
}
