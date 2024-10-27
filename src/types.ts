
export type Day = {
    index?: number,
    day?: string
};

export type Week = {
    index?: number,
    days: Array<Day>
};

export type Month = {
    weeks: Array<Week>,
    month: string,
    index: number,
    year: number,
    isLeap: boolean,
    fnCallback?: Function,
    ref?: any
};

export type Past = Array<Month>

export type PastPromise = Promise<Past>

