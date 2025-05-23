import { useEffect } from 'react'

const ScrollSpy = ({ sectionIds }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            history.replaceState(null, '', `#${entry.target.id}`)
          }
        })
      },
      {
        threshold: 0.6,
      }
    )

    sectionIds.forEach(id => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return null
}

export default ScrollSpy
