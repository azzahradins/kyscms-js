export default function QuickAccess (): React.ReactElement {
  const comment = [{
    chapter: 302,
    count: 120
  }, {
    chapter: 301,
    count: 10
  }, {
    chapter: 300,
    count: 348
  }, {
    chapter: 299,
    count: 12
  }, {
    chapter: 298,
    count: 48
  }, {
    chapter: 297,
    count: 57
  }]

  return (
    <div className='p-4 dark:bg-dark-2 w-full rounded-lg justify-between flex flex-col gap-3 mb-4'>
      <h3>Quick Access</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:[&>*:nth-child(n+6)]:hidden gap-3 overflow-hidden">
        {comment.length > 0
          ? comment.map((val) => (
            <article key={val.chapter} className="pt-8 bg-gradient-to-tr from-indigo-500 from-10% to-violet-800 text-right px-2 pb-2 rounded-lg">
              <h3>Chapter {val.chapter}</h3>
              <small className="font-light text-ellipsis">{val.count} Comments</small>
            </article>
          ))
          : <p>No comment available</p>}
      </div>
    </div>
  )
}
