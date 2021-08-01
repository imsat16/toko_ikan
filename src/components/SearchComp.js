import {InputGroup, FormControl} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa';

export default function SearchComp () {
  return (
    <InputGroup className="mb-3">
      <FormControl
        type="text"
        placeholder="Cari yang anda inginkan"
        aria-label="Cari yang anda inginkan"
        aria-describedby="basic-addon1"
      />
      <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
    </InputGroup>
  );
}
