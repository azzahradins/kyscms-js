function Card({ children }: {children: React.ReactNode}): React.ReactElement {
  return (
    <div className="w-full p-6 bg-light-3 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      { children }
    </div>
  )
}

export default Card