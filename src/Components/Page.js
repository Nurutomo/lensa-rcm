function Page({ title, children }) {
  return (
    <>
      <h1 className='mt-8 mb-4'>{title}</h1>
      {children}
    </>
  )
}

export default Page
