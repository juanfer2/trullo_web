import { useState, createRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().required('this field is required')
});

const defaultValues = {
  title: '',
  image: {},
  isPrivate: false
};

export const useBoardForm = () => {
  // const [fileImg, setFileImg] = useState('')
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
    defaultValues,
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

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileUrl: any = reader.result;
        setImageUrl(fileUrl);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const changeIsPrivate = () => {
    setValue('isPrivate', !getValues('isPrivate'));
  };

  const clearImage = () => {
    setValue('image', {});
    setImageUrl('');
  }

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
    clearImage
  };
};
