function LinkList(props) {
    return(
        <div>
            <h1>Links to visit and take notes</h1>
            <ul>
                {props.children}
            </ul>
        </div>
                    
    )
}
export {LinkList}