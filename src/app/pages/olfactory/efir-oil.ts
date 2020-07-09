export interface EfirOil {
  nameRu: string;
  nameLatin: string;
  path: string;
  image: string;
  description: string;
  content: EfirOilList[];
}

export interface EfirOilList {
  title: string;
  path: string;
  description: string;
  image: string;
  leftPosition?: boolean;
  rightPosition?: boolean;
}
