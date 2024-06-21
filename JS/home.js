function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex' 
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' 
}

const messageButton = document.querySelector(".message_button");
messageButton.addEventListener("click",function(){
    alert("Message Sent!")
})