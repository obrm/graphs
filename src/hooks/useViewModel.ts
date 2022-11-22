import { useRef, useEffect } from 'react';

export const useViewModel = (ViewModel: any, props: any): any => {
  let viewModel: any = useRef(null);

  if (!viewModel.current) {
    viewModel.current = new ViewModel(props);
  }

  useEffect(() => {
    if (viewModel) {
      viewModel.current!.props = props
    }
  });

  return viewModel.current;
};