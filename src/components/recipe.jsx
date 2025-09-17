import ReactMarkdown from "react-markdown"
export default function Recipe(props){
    return (
        <section className="suggested-container">
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}
