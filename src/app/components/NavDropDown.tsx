import { navigation } from "./Header"
import { NavItem } from "./NavItem"

interface NavDropDownProp {
    handleNavDrop: () => void
}

export function NavDropDown({ handleNavDrop }: NavDropDownProp) {
    return (
        <div
            className="flex flex-col items-center gap-y-2 bg-white py-4 shadow-2xl shadow-accent"
            onClick={handleNavDrop}
        >
            {navigation.map((item, i) => (
                <NavItem key={i} href={item.hash}>
                    {item.title}
                </NavItem>
            ))}
        </div>
    )
}
