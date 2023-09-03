import React, {useState} from 'react'
import Frame from '../../Components/Frame'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import InfoCard from '../../Components/InfoCard'
import AUMOLineChart from '../../Components/AUMOLineChart'
import VaultTable from '../../Components/VaultTable'
import BuySellModal from '../../Components/BuySellModal'

const VaultDetail = () => {
    var navigate = useNavigate()
    const [modalType, setModalType] = useState<string>("Buy")
    const [modalSize, setModalSize] = useState<string>("md")

    const [modalShow, setModalShow] = useState<boolean>(false);
    const [isFinalStep, setIsFinalStep] = useState<boolean>(false);


    const handleModal = (val: string) => {
        setModalType(val)
        setIsFinalStep(false)
        setModalSize("md")
        setModalShow(true)
    }
  return (
    <Frame title='Vault Detail'>
        <Container>
            <div className="content-wrapper">
                <div className="go-back" onClick={() => navigate(-1)}><Icon icon="gg:arrow-left" /> {" "} Back to Vaults</div>
                <div className="vault-header">
                    <div className="title">
                        <Icon icon="material-symbols:circle" className='text-icon'/> {" "} Vault Name A
                    </div>
                    <div className="btns">
                        <Button variant='primary' className='btn-left' onClick={() => handleModal("Buy")}>Buy</Button>
                        <Button variant='primary' onClick={() => handleModal("Sell")}>Sell</Button>
                    </div>
                </div>
                <div className="info-cards">
                    <InfoCard 
                    rowOf={4}
                    title='AUM'
                    value='$10,000,000.00'
                    />
                    <InfoCard 
                    rowOf={4}
                    title='Depositor'
                    value='4,000'
                    />
                    <InfoCard 
                    rowOf={4}
                    title='Network'
                    value='Polygon'
                    />
                    <InfoCard
                    rowOf={4}
                    title='Fee'
                    value='1,000'
                    />
                </div>
                <div className="asset-chart-section">
                    <AUMOLineChart 
                        hasCardTitle={true}
                        disableChartSubtitle={false}
                        subtitle='Current Price'
                        title='$10,000,000.00'
                        isIncrease={true}
                        changeValue='+55%'
                    />
                </div>
                <div className="vault-table-section">
                    <VaultTable />
                </div>
                <div className="vault-about">
                    <div className="header">About</div>
                    <div className="sub-about">
                        <div className="sub-header">Brief Introduction</div>
                        <div className="content">Lörem ipsum tesam tengar fastän nigisk jag tresade desur då vindvändare i göv. Diahet teheten, heterobel tetes men beligt, om deciled, sedan olonera för att saskapet, misenar. Pres pamihuskapet intrande. Desåvånas stenosk poska pengar, dede: notävis i nesade demistat resultatvarna midat. Etnomatisk änar om typoren att goskapet, i galna chips-sjukan, labiskapet ödoda därför att disk, alig. Tätynade nyr ong fyrade alltså maktigt i syhåsade, då nydöbuvis fäjäskapet: paratädade därför att kåde paheten. Dire mumur huruvida labusk den por römulingar trev krongen los. </div>
                    </div>
                    <div className="sub-about">
                        <div className="sub-header">Token Inclusion Criteria</div>
                        <div className="content">Lörem ipsum tesam tengar fastän nigisk jag tresade desur då vindvändare i göv. Diahet teheten, heterobel tetes men beligt, om deciled, sedan olonera för att saskapet, misenar. Pres pamihuskapet intrande. Desåvånas stenosk poska pengar, dede: notävis i nesade demistat resultatvarna midat. Etnomatisk änar om typoren att goskapet, i galna chips-sjukan, labiskapet ödoda därför att disk, alig. Tätynade nyr ong fyrade alltså maktigt i syhåsade, då nydöbuvis fäjäskapet: paratädade därför att kåde paheten. Dire mumur huruvida labusk den por römulingar trev krongen los. </div>
                    </div>
                    <div className="sub-about">
                        <div className="sub-header">Weight Computation</div>
                        <div className="content">Lörem ipsum tesam tengar fastän nigisk jag tresade desur då vindvändare i göv. Diahet teheten, heterobel tetes men beligt, om deciled, sedan olonera för att saskapet, misenar. Pres pamihuskapet intrande. Desåvånas stenosk poska pengar, dede: notävis i nesade demistat resultatvarna midat. Etnomatisk änar om typoren att goskapet, i galna chips-sjukan, labiskapet ödoda därför att disk, alig. Tätynade nyr ong fyrade alltså maktigt i syhåsade, då nydöbuvis fäjäskapet: paratädade därför att kåde paheten. Dire mumur huruvida labusk den por römulingar trev krongen los. </div>
                    </div>
                    <div className="sub-about">
                        <div className="sub-header">Index Maintenace</div>
                        <div className="content">Lörem ipsum tesam tengar fastän nigisk jag tresade desur då vindvändare i göv. Diahet teheten, heterobel tetes men beligt, om deciled, sedan olonera för att saskapet, misenar. Pres pamihuskapet intrande. Desåvånas stenosk poska pengar, dede: notävis i nesade demistat resultatvarna midat. Etnomatisk änar om typoren att goskapet, i galna chips-sjukan, labiskapet ödoda därför att disk, alig. Tätynade nyr ong fyrade alltså maktigt i syhåsade, då nydöbuvis fäjäskapet: paratädade därför att kåde paheten. Dire mumur huruvida labusk den por römulingar trev krongen los. </div>
                    </div>
                </div>
            </div>
        <BuySellModal show={modalShow} onHide={() => setModalShow(false)} modalType={modalType} modalSize={modalSize} setModalSize={setModalSize} isFinalStep={isFinalStep} setIsFinalStep={setIsFinalStep}/>
        </Container>
    </Frame>
  )
}

export default VaultDetail
