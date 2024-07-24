import styles from "./externalLink.module.css";

export default function ExternalLink ({ fill, id = styles.externalLink }) {
  return (
    <svg id={ id } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
      <path d="M1.5 3.5V14.5H12.5V10H14V15C14 15.5523 13.5523 16 13 16H1C0.447716 16 0 15.5523 0 15V3C0 2.44772 0.447715 2 1 2H6V3.5H1.5Z" fill={ fill }/>
      <path d="M15.9217 1.17828L7.01473 10.0853L5.95407 9.02462L14.8611 0.117624L15.9217 1.17828Z" fill={ fill }/>
      <path d="M7.5 0H16V1.5H7.5V0Z" fill={ fill }/>
      <path d="M16 0L16 8.5L14.5 8.5L14.5 -6.55671e-08L16 0Z" fill={ fill }/>
    </svg>
  )
}
