import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from 'react-bootstrap/Badge'

function Info() {
    return (
        <>
            <p>Anda mencari-cari <b>Pricelist?</b></p>
            <p>Menanyakan <b>harga dan tarif?</b></p>

            <h5>Tenang Wae!</h5>

            <p>Kami akan mengirimkan tampilan <b>Pricelist</b><br />
                setelah anda menyampaikan kebutuhan dan keinginan Anda.</p>

            <p>Silahkan hubungi <Badge bg="secondary">
                <FontAwesomeIcon icon='fa-solid fa-coffee' />
            </Badge></p>
        </>
    );

}

export default Info;