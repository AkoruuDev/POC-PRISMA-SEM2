type ListEntity = {
    id?: number,
    name?: string,
    cientific?: string,
    description?: string,
    habilities?: string[],
    atk?: number,
    def?: number
};

type List = Omit<ListEntity, "id">

export {
    List,
}