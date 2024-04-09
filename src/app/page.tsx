import styles from './page.module.css';

export default function Home() {
  const heroes = ['Iron Man', 'Spider-Man', 'Thor', 'Hulk', 'Black Widow'];

  return (
    <div className={styles.heroList}>
      <h1>Marvel Heroes</h1>
      <ul>
        {heroes.map((hero, index) => (
          <li key={index}>{hero}</li>
        ))}
      </ul>
    </div>
  );
}
