interface CategoryInfo {
  category: string;
  count: number;
}

export interface ResponseCategory {
  check: boolean;
  information: CategoryInfo[];
}
