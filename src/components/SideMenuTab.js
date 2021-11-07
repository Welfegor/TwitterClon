function SideMenuTab(props) {
  return (
    <a href={props.link} className="Side-menu-list-item">
        <div className="Side-menu-list-item-wrapper">
            {props.children}
            <span className="Side-menu-list-item-text">{props.text}</span>
        </div>
    </a>
  );
}

export default SideMenuTab