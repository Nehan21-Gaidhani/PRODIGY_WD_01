let btn = document.getElementsByClassName("menu");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        let sidebar = document.createElement('div');
        sidebar.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        sidebar.style.width = "200px";
        sidebar.style.height = "100%";
        sidebar.style.position = "fixed";
        sidebar.style.left = "0";
        sidebar.style.top = "0";
        sidebar.style.padding = "20px";
        sidebar.style.boxSizing = "border-box";

        
        let item = document.getElementById('items');
        
            item.classList.add("newitem");
            item.style.display = "flex"; 
        
            
       
        let closeButton = document.createElement('button');
        let closeIcon = document.createElement('i');
        closeIcon.className = "fas fa-times"; 
        closeButton.appendChild(closeIcon);
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "10px";
        closeButton.style.background = "transparent";
        closeButton.style.color = "white"; 

        
        closeButton.addEventListener("click", function() {
            document.body.removeChild(sidebar);

          
                item.classList.remove("newitem");
                item.style.display = "none"; 
            
        });

     
        sidebar.appendChild(closeButton);

        document.body.appendChild(sidebar);
    });
}
let photographyText = document.createElement('div');
photographyText.id = 'right-align-text';
photographyText.textContent = 'Photography';
document.body.appendChild(photographyText);

let photographyText2 = document.createElement('div');
photographyText2.id = 'right-align-text2';
photographyText2.textContent = '"The beauty of life captured"';
document.body.appendChild(photographyText2);

let picture3 = document.createElement('div');
picture3.id = 'picture3';
document.body.appendChild(picture3);
let picture1 = document.createElement('div');
picture1.id = 'picture1';
document.body.appendChild(picture1);

let picture2 = document.createElement('div');
picture2.id = 'picture2';
document.body.appendChild(picture2);

let picture5 = document.createElement('div');
picture5.id = 'picture5';
document.body.appendChild(picture5);


let picture4 = document.createElement('div');
picture4.id = 'picture4';
document.body.appendChild(picture4);

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});