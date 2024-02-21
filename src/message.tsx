function Message() {
    // these is Pascel casing for function in TypeScript
    const name = 'Vaishnavi';
    if(name)  // if name is not NULL or if name exists
        return <h1>Hello {name}</h1>; // JSX which is JavaScript with XML. 
    return <h1>Hello world</h1>; // Here we can add dynamic content where we can put a returned value
    /* Dynamic ext. we can call a function and get the return value there as well */

// React dom is what will hold this family tree of code and then make updates from site be easily updated.

}

export default Message;