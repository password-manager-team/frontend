import { ReactNode } from "react"

const AuthContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="shadow-lg max-w-sm min-h-[525px] m-auto p-12">
            {children}
        </div>
    )
}

export default AuthContainer;