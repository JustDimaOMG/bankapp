import styles from './OrangeBtn.module.scss'

type Props = {
  text:string
  type: "button" | "submit" | "reset"
}

const OrangeBtn = (props: Props) => {
  return (
    <button className={styles.container} type={props.type}>
      {props.text}
    </button>
  )
}

export default OrangeBtn