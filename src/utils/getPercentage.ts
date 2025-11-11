

export const getCompletedPercentage = (task: any): any => {
    const subTasks = task.SubTasks || [];
    if (subTasks.length === 0) return "0%";

    const completed = subTasks.filter((s: any) => s.status === "COMPLETED").length;
    const percent = (completed / subTasks.length) * 100;

    return Number(percent.toFixed(2));
};

export const getOverallCompletion = (tasks: any[]): any => {
    const allSubTasks = tasks.flatMap((t) => t.SubTasks || []);
    if (allSubTasks.length === 0) return 0;

    const completed = allSubTasks.filter((s) => s.status === "COMPLETED").length;
    return +((completed / allSubTasks.length) * 100).toFixed(2);
};