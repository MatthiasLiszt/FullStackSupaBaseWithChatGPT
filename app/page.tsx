import Image from 'next/image'
import styles from './page.module.css'
import CoursesList from './components/CoursesList'

export default function Home() {
  return (
    <main className={styles.main}>
      <CoursesList />
    </main>
  )
}
