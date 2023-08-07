import React from 'react'

function OfflineWindow() {
    const style = {
        padding: "2rem 3rem",
        position: "fixed",
        top: "50%",
        left: "50%",
        textAlign: "center",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#ea4335",
        color: "#f1f1f1"

    }
    return (
        <div style={style}>
            <h1>You are  offline. <br />😕</h1>
        </div>
    )
}

export default OfflineWindow