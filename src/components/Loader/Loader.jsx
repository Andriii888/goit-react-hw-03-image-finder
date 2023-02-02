import { Triangle } from 'react-loader-spinner';

export function Loader (){
    return (<Triangle
        height="100"
        width="100"
        color="#981728"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />)
}