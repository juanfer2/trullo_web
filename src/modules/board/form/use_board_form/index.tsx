import { useState, createRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@modules/board/form/use_board_form/validationSchema'

interface Board {
  title: string,
  image?: any,
  isPrivate: boolean
}

const defaultValues = {
  title: '',
  image: {},
  isPrivate: false
};
interface ImgInterface {
  imageUrl: string;
  loadingImage: boolean;
  errorImage: any;
}

export const useBoardForm = (intialState?: Board) => {
  const [imageState, setImageState] = useState<ImgInterface>({
    imageUrl: '',
    loadingImage: false,
    errorImage: ''
  });
  const [imageUrl, setImageUrl] = useState('');
  const inputRef = createRef<any>();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: intialState as Board || defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log('data');
    console.log(data);
  };

  const onFileChange = (event: any) => {
    const {
      target: {
        files: [file]
      }
    } = event;

    setValue('image', file);

    if (event.target.files && event.target.files[0]) {
      setImageState({ ...imageState, loadingImage: true });
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileUrl: string = reader.result as string;
        setImageState({ ...imageState, imageUrl: fileUrl, loadingImage: false });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const changeIsPrivate = () => {
    setValue('isPrivate', !getValues('isPrivate'));
  };

  const clearImage = () => {
    setImageState({ ...imageState, imageUrl: '', errorImage: '' });
    inputRef.current.value = '';
    setValue('image', {});
  };

  const isPrivate = useWatch({ control, name: 'isPrivate' });

  return {
    onSubmit,
    handleSubmit,
    errors,
    register,
    setValue,
    getValues,
    inputRef,
    imageUrl,
    setImageUrl,
    onFileChange,
    changeIsPrivate,
    isPrivate,
    clearImage,
    imageState
  };
};
