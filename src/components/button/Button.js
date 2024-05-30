// import "./button.module.css";

export default function Button(props) {
    return (
        <button className={props.theme} > {props.title}</button >
    )
}