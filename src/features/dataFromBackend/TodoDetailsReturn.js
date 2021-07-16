export const TodoDetailsReturn = ({item}) => {

    return (
        <>
            <p>Information about your todo</p>
            <br/>

            {!item && <h5>Is loading..</h5>}
            {item && <div className={'todo_details'}>
                <h2>Title : {item.title}</h2>
                <p>Description : {item.description}</p>
                <p>Description : {item.description}</p>
                <p>Id : {item.id}</p>
                <p>Completed : {item.completed.toString()}</p>
                <p>Created at : {item.createdAt}</p>
                <p>Updated at : {item.updatedAt}</p>
            </div>}
        </>
    )
}