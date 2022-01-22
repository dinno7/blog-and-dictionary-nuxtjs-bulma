export const al = () => {
  let mineAlert = document.createElement("p");
  mineAlert.textContent = "Here is alert";
  mineAlert.style = `position:absolute;
  top:15px;
  left:50%;
  z-index:999;
  transform:translateX(-50%)
  transform:translateY(-50px)
  width:max-content;
  padding:15px;
  font-size:24px;
  font-weight:bold;
  color:white;
  background:black;
  border-radius:10px;
  transition:all 1s ease;
  opacity:0`;
  document.body.appendChild(mineAlert);
  mineAlert.style.opacity = 1;
  mineAlert.style.transform = "translateY(0)";
  setTimeout(() => {
    mineAlert.style.transform = "translateY(-50px)";
  }, 1000);
};
