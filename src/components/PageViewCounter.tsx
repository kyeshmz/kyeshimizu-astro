import { useEffect, useState } from 'react'

export default function PageViewCounter() {
  const [pageViewCount, setPageViewCount] = useState(0)

  useEffect(() => {
    const encodedPath = encodeURIComponent(window.location.pathname)

    const fetchPageViews = async () => {
      try {
        // fetch the data for the current page
        const response = await fetch(`/api/pageViews?path=${encodedPath}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        // Gracefully handle the error scenario.
        // Default to "1" as the current user is seeing the page
        if (!response.ok) {
          setPageViewCount(1)
        } else {
          const { count } = await response.json()
          // Optimistically, show the new page view count
          setPageViewCount(Number(count) + 1)
        }
      } catch (err) {
        // Default to "1" as the current user is seeing the page
        setPageViewCount(1)
      }

      // Make a network request to bump the page view count for this page
      // It is OK to perform a fire and forget (not waiting for the promise to resolve) call for updating the data source.
      await fetch('/api/pageViews', {
        method: 'PUT',
        referrerPolicy: 'same-origin',
        body: JSON.stringify({
          path: encodedPath,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    fetchPageViews()
  }, [])

  if (pageViewCount > 0) {
    return (
      <p className='dark:bg-stone-900 bg-slate-200 dark:text-stone-400 text-slate-400 mx-auto p-2 my-12 text-xs max-w-fit'>
        Seen 👀 by {pageViewCount} human(s)
      </p>
    )
  }
}
