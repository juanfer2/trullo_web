import { useState, createRef } from 'react';

interface ImgInterface {
  imageUrl: string;
  loadingImage: boolean;
  errorImage: any;
}

export const useUploadImage = () => {
  const [imageState, setImageState] = useState<ImgInterface>({
    imageUrl: '',
    loadingImage: false,
    errorImage: ''
  });
  const inputRef = createRef<any>();

  const onFileChange = (event: any) => {
    const {
      target: {
        files: [file]
      }
    } = event;

    // setValue('image', file);
    console.log(file);

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

  const clearImage = () => {
    setImageState({ ...imageState, imageUrl: '', errorImage: '' });
    inputRef.current.value = '';
    // setValue('image', {});
  };

  return { imageState, inputRef, onFileChange, clearImage };
};
