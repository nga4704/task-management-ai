import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";

import type {
    ProjectDetail,
} from "../../types/projectDetail.types";

import type {
    ProjectStatus,
} from "@/features/projects/types/project.types";

import {
    useUpdateProject,
} from "../../hooks/useUpdateProject";

type Props = {
    open: boolean;
    onClose: () => void;
    project: ProjectDetail;
};

function EditProjectModal({
    open,
    onClose,
    project,
}: Props) {
    const {
        mutate: updateProject,
        isPending,
    } = useUpdateProject();

    const [name, setName] =
        useState(project.name);

    const [
        description,
        setDescription,
    ] = useState(
        project.description
    );

    const [status, setStatus] =
        useState<ProjectStatus>(
            project.status
        );

    const [
        startDate,
        setStartDate,
    ] = useState(
        project.startDate
            ? project.startDate.slice(
                0,
                10
            )
            : ""
    );

    const [endDate, setEndDate] =
        useState(
            project.endDate
                ? project.endDate.slice(
                    0,
                    10
                )
                : ""
        );


    const handleSubmit = (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        updateProject(
            {
                projectId: project.id,

                payload: {
                    name,
                    description,
                    status,

                    startDate:
                        startDate || undefined,

                    endDate:
                        endDate || undefined,
                },
            },
            {
                onSuccess: () => {
                    toast.success(
                        "Project updated"
                    );

                    onClose();
                },

                onError: () => {
                    toast.error(
                        "Update failed"
                    );
                },
            }
        );
    };

    useEffect(() => {
        setName(project.name);

        setDescription(
            project.description
        );

        setStatus(
            project.status
        );

        setStartDate(
            project.startDate
                ? project.startDate.slice(
                    0,
                    10
                )
                : ""
        );

        setEndDate(
            project.endDate
                ? project.endDate.slice(
                    0,
                    10
                )
                : ""
        );
    }, [project]);

    if (!open) {
        return null;
    }


    return (
    <div className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-sm
        p-4
    ">
        <div className="
            w-full
            max-w-2xl
            rounded-2xl
            bg-white
            shadow-2xl
            border
            border-border
            overflow-hidden
        ">

            {/* HEADER */}
            <div className="
                flex
                items-center
                justify-between
                px-6
                py-5
                border-b
                border-border
                bg-surface
            ">
                <div>
                    <h2 className="text-2xl font-bold">
                        Edit Project
                    </h2>

                    <p className="
                        text-sm
                        text-muted
                        mt-1
                    ">
                        Update project information and timeline
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="
                        p-2
                        rounded-xl
                        hover:bg-surfaceSecondary
                        transition
                    "
                >
                    <X size={20} />
                </button>
            </div>

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="
                    space-y-5
                    p-6
                "
            >

                {/* NAME */}
                <div>
                    <label className="
                        text-sm
                        font-medium
                        text-muted
                    ">
                        Project Name
                    </label>

                    <input
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        placeholder="Enter project name"
                        className="
                            mt-2
                            w-full
                            rounded-xl
                            border
                            border-border
                            px-4
                            py-3
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primary/20
                        "
                    />
                </div>

                {/* DESCRIPTION */}
                <div>
                    <label className="
                        text-sm
                        font-medium
                        text-muted
                    ">
                        Description
                    </label>

                    <textarea
                        rows={4}
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        placeholder="Describe your project..."
                        className="
                            mt-2
                            w-full
                            rounded-xl
                            border
                            border-border
                            px-4
                            py-3
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primary/20
                        "
                    />
                </div>

                {/* STATUS */}
                <div>
                    <label className="
                        text-sm
                        font-medium
                        text-muted
                    ">
                        Status
                    </label>

                    <select
                        value={status}
                        onChange={(e) =>
                            setStatus(
                                e.target.value as ProjectStatus
                            )
                        }
                        className="
                            mt-2
                            w-full
                            rounded-xl
                            border
                            border-border
                            px-4
                            py-3
                            bg-white
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primary/20
                        "
                    >
                        <option value="PLANNING">
                            Planning
                        </option>

                        <option value="IN_PROGRESS">
                            In Progress
                        </option>

                        <option value="ON_HOLD">
                            On Hold
                        </option>

                        <option value="REVIEW">
                            Review
                        </option>

                        <option value="COMPLETED">
                            Completed
                        </option>
                    </select>
                </div>

                {/* DATES */}
                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-4
                ">
                    <div>
                        <label className="
                            text-sm
                            font-medium
                            text-muted
                        ">
                            Start Date
                        </label>

                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) =>
                                setStartDate(e.target.value)
                            }
                            className="
                                mt-2
                                w-full
                                rounded-xl
                                border
                                border-border
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-primary/20
                            "
                        />
                    </div>

                    <div>
                        <label className="
                            text-sm
                            font-medium
                            text-muted
                        ">
                            End Date
                        </label>

                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) =>
                                setEndDate(e.target.value)
                            }
                            className="
                                mt-2
                                w-full
                                rounded-xl
                                border
                                border-border
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-primary/20
                            "
                        />
                    </div>
                </div>

                {/* FOOTER */}
                <div className="
                    flex
                    justify-end
                    gap-3
                    pt-4
                    border-t
                    border-border
                ">
                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            px-5
                            py-3
                            rounded-xl
                            border
                            border-border
                            hover:bg-surfaceSecondary
                            transition
                            font-medium
                        "
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="
                            px-5
                            py-3
                            rounded-xl
                            bg-black
                            text-white
                            font-medium
                            hover:opacity-90
                            disabled:opacity-50
                            transition
                        "
                    >
                        {isPending
                            ? "Saving..."
                            : "Save Changes"}
                    </button>
                </div>

            </form>
        </div>
    </div>
);
}

export default EditProjectModal;