import{ useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const mockAssignments = [
    { id: 1, title: 'React Vite', description: 'FoodAPp', status: 'pending', dueDate: '2025-02-01', score: null },
    { id: 2, title: 'Next js Project', description: 'E-Commerce', status: 'complete', dueDate: '2025-01-15', score: 85 },
    { id: 3, title: 'React Native', description: 'LMS', status: 'incomplete', dueDate: '2025-03-10', score: null },
    { id: 4, title: 'JavaScript', description: 'ToDo', status: 'new', dueDate: '2025-02-20', score: null },
];

function T_AssignmentPage() {
    const [assignments, setAssignments] = useState(mockAssignments);
    const [newAssignment, setNewAssignment] = useState({ title: '', description: '', dueDate: '', status: 'new' });
    const [filter, setFilter] = useState('all');

    const handleAddAssignment = () => {
        setAssignments([...assignments, { ...newAssignment, id: assignments.length + 1 }]);
        setNewAssignment({ title: '', description: '', dueDate: '', status: 'new' });
    };

    const filteredAssignments = assignments.filter(assignment => filter === 'all' || assignment.status === filter);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4"> Assignments </h1>
        
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Add New Assignment</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New Assignment</DialogTitle>
                        <DialogDescription>Fill out the details of the new assignment.</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col space-y-2">
                        <input
                            type="text"
                            placeholder="Assignment Title"
                            value={newAssignment.title}
                            onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                            className="border p-2"
                        />
                        <textarea
                            placeholder="Assignment Description"
                            value={newAssignment.description}
                            onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                            className="border p-2"
                        />
                        <input
                            type="date"
                            value={newAssignment.dueDate}
                            onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                            className="border p-2"
                        />
                        <Button onClick={handleAddAssignment}>Add Assignment</Button>
                    </div>
                </DialogContent>
            </Dialog>
            
            <div className="flex space-x-6 items-center align-middle p-4 mb-4">
                <Button className="p-6 space-x-5 gap-4" onClick={() => setFilter('all')}>All</Button>
                <Button className="p-6 gap-5" onClick={() => setFilter('new')}>New</Button>
                <Button className="p-6 gap-5" onClick={() => setFilter('pending')}>Pending</Button>
                <Button className="p-6 gap-5" onClick={() => setFilter('complete')}>Complete</Button>
                <Button className="p-6 gap-5" onClick={() => setFilter('incomplete')}>Incomplete</Button>
            </div>

           

            <div className="   w-full mt-4">
                <h2 className="text-2xl font-bold mb-8">Current Assignments</h2>
                {filteredAssignments.length === 0 ? (
                    <p>No assignments found.</p>
                ) : (
                    <ul className="space-y-2 ">
                        {filteredAssignments.map((assignment) => (
                            <li key={assignment.id} className="border p-2">
                                <h3 className="text-xl font-bold">{assignment.title}</h3>
                                <p>{assignment.description}</p>
                                <p>Due Date: {assignment.dueDate}</p>
                                <p>Status: {assignment.status}</p>
                                {assignment.score !== null && <p>Score: {assignment.score}</p>}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default T_AssignmentPage;
