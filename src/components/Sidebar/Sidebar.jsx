import "./Sidebar.css";
import {SidebarItem} from "./SidebarItem";

export function Sidebar() {
	return (
		<div className="container-column sidebar">
			<SidebarItem path="/">
				<i className="fa fa-home" aria-hidden="true"></i>
				<small>Home</small>
			</SidebarItem>
			<SidebarItem path="/search">
				<i className="fa fa-search" aria-hidden="true"></i>
				<small>Search</small>
			</SidebarItem>
			<SidebarItem path="/announcements">
				<i className="fa fa-bullhorn" aria-hidden="true"></i>
				<small>Announcements</small>
			</SidebarItem>
			<SidebarItem path="/share">
				<i className="fa fa-edit" aria-hidden="true"></i>
				<small>Share_NEWS</small>
			</SidebarItem>
		</div>
	);
}

export default Sidebar;
