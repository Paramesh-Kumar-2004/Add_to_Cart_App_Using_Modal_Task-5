import { Button, Spinner } from "flowbite-react";

function Loader() {
    return (
        <div className="flex flex-row gap-3">
            <Button>
                <Spinner aria-label="Spinner button example" size="sm" light />
                <span className="pl-3">Loading...</span>
            </Button>
        </div>
    );
}

export default Loader