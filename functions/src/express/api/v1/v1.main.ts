export const root = '/api/v1';

export const permission = (value: number) => {
  const Create = [1, 'Create'];
  const Read = [2, 'Read'];
  const Update = [4, 'Update'];
  const Delete = [8, 'Delete'];

  switch (value) {
    case 1:
      return { Create };

    case 2:
      return { Read };
    case 3:
      return { Create, Read };

    case 4:
      return { Update };
    case 5:
      return { Create, Update };
    case 6:
      return { Read, Update };
    case 7:
      return { Create, Read, Update };

    case 8:
      return { Delete };
    case 9:
      return { Create, Delete };
    case 10:
      return { Read, Delete };
    case 11:
      return { Create, Read, Delete };
    case 12:
      return { Update, Delete };
    case 13:
      return { Create, Update, Delete };
    case 14:
      return { Read, Update, Delete };
    case 15:
      return {
        Create,
        Read,
        Update,
        Delete
      };

    default:
      return null;
  }
};

export const template: IEndpoint = {
  endpoint: '/template',
  permissions: 15
};

export const users: IEndpoint = {
  endpoint: '/users',
  permissions: 6
}

interface IEndpoint {
  endpoint: string;
  permissions: number;
}
