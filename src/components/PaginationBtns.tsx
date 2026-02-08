interface PaginationBtnsProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    // onPageChange: (id: string) => void;
}
const PaginationBtns: React.FC<PaginationBtnsProps> = ({totalPages, currentPage, setCurrentPage}) => {
    const btnStyles = {
        active: "bg-blue-500 text-white px-2 py-1",
        default: "bg-gray-200 text-gray-700 hover:bg-gray-300 gap-2 px-2 py-1 rounded"
    }
    
    const renderPageButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button key={i} id = {`page-${i}`} className={`${i === currentPage ? btnStyles.active : btnStyles.default}`}>
                    {i}
                </button>
            );
        }
        return buttons;
    };

    const handleBtnClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLButtonElement) {
            // onPageChange(e.target.id);
            const id = e.target.id;
            if (id === "prev-btn" && currentPage > 1) {
                setCurrentPage((prev:number) => prev - 1);
                // onPageChange(`page-${currentPage - 1}`);
            } else if (id === "next-btn" && currentPage < totalPages) {
                setCurrentPage((prev: number) => prev + 1);
                // onPageChange(`page-${currentPage + 1}`);
            } else if (id.startsWith("page-")) {
                setCurrentPage(parseInt(id.split('-')[1]));
                // onPageChange(id);
            }
        }
    }

    return (
        <div onClick = {handleBtnClick} className="flex gap-1">
            <button className = {`${btnStyles.default} ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`} id = "prev-btn" disabled={currentPage === 1}>
                Previous
            </button>
            {renderPageButtons()}
            <button className = {`${btnStyles.default} ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`} id = "next-btn" disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    )
}

export default PaginationBtns;