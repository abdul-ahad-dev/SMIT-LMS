import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-4xl font-bold">Login</div>
            <div className="flex flex-row gap-4 my-8">
                <Button>
                    <Link to='/student'>Student</Link>
                </Button>
                <Button>
                    <Link to='/teacher'>Teacher</Link>
                </Button>
                <Button>
                    <Link to='/admin'>Admin</Link>
                </Button>
            </div>
        </div>
    )
}

export default Login