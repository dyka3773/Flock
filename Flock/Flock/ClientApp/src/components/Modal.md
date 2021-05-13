A simple modal component that can contain any other component or html element.

```js
 const [modalCont, setModalCont] = React.useState();
 const modalRef = React.useRef();

const onClick = () => {

       
        setModalCont(
            <div>
               <h1>This is a modal</h1>
               <div>It can contain anything</div>
               <div style={{padding:"1rem"}}>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                frameborder="0"/>
               </div>
            </div>
        )
        openModal();
    }


const openModal = () => {
    modalRef.current.style.display = "flex";
}

const closeModal = (e) => {
    if (modalRef.current.firstChild.contains(e.target) && !(e.target.className.includes("close")))
        return;
    modalRef.current.style.display = "none";
}




<div>
<Modal ref={modalRef} onClose={closeModal}>
        {modalCont}
</Modal>

<button className="ui button primary" onClick={onClick}>Open Modal</button>
</div>

```