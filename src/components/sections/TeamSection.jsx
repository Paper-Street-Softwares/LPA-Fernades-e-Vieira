import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import { ArrowRight, CheckCircle2, X } from 'lucide-react'
import { Dialog } from 'primereact/dialog'
import content from '../../content/content'
import ButtonReflexo from '../interactives/ButtonReflexo'
import { Button } from '../interactives/ButtonNovoTemplate'
import { Phone } from 'lucide-react'

function TeamSectionNew({ ButtonModal, colorMode }) {
  const [visible, setVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  const onClick = () => {
    setModalTitle(content.texts.about.title)
    setVisible(true)
  }

  // Definindo classes conforme colorMode
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    iconBg,
    buttonBg,
    textDestaque,
    image,
    miniTagColor

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-white'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
      cardBg = 'bg-white/10'
      iconBg = 'bg-primaryDark/10 text-primaryDark'
      buttonBg = 'bg-primaryDark'
      miniTagColor = 'text-primaryDark'
      image = ' border-[8px] border-white'
      break
    case 'dark':
      backgroundMode = 'bg-black'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryLight'
      cardBg = 'bg-gray-800/20'
      iconBg = 'bg-primaryLight/20 text-primaryLight'
      buttonBg = 'bg-primaryLight'
      miniTagColor = 'text-primaryDark'
      image = ' border-[8px] border-borderImage'
      break
    default:
      backgroundMode = 'bg-white'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
      cardBg = 'bg-white/10'
      iconBg = 'bg-primaryDark/10 text-primaryDark'
      buttonBg = 'bg-primaryDark'
      miniTagColor = 'text-primaryDark'
      image = ' border-[8px] border-white'
  }

  return (
    <SectionArea id="about" className={`${backgroundMode}`}>
      <SectionWrapper className="desktop1:max-w-[900px]">
        <div className="text-center">
          <span
            className={`font-bold font-secondFont tracking-wider uppercase mb-4 text-xs block ${miniTagColor}`}
          >
            {content.texts.team.miniTag}
          </span>
          <h1
            className={`text-4xl md:text-[48px] leading-[32px] font-mainFont font-light mb-6 ${text}`}
          >
            {' '}
            {content.texts.team.title}
          </h1>
          <p
            className={`text-lg font-secondFont font-light md:text-xl max-w-2xl mx-auto  ${textOpacity}`}
          >
            {' '}
            {content.texts.team.subtitle}
          </p>
        </div>
        <section className="w-full relative overflow-visible">
          <div className="mx-aut flex flex-col relative z-10">
            <div className="flex flex-col-reverse desktop1:flex-row-reverse gap-4 desktop1:gap-16 items-center">
              {/* Conteúdo textual */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-8"
              >
                <div className="max-w-[1200px]">
                  <h1
                    className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 flex flex-wrap gap-2 ${text}`}
                  >
                    Dra. Jéssica Fernandes
                  </h1>
                  <p
                    className={`font-secondFont font-light text-sm tablet1:text-lg leading-relaxed ${textOpacity}`}
                  >
                    Sou Jéssica Fernandes, advogada previdenciarista, e escolhi
                    essa área porque acredito que por trás de cada benefício
                    existe uma vida inteira de trabalho, esforço e esperança.
                  </p>
                </div>
              </motion.div>

              {/* Imagem com destaque */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="relative w-full desktop1:max-w-[400px] mt-10 tablet1:mt-24 desktop1:mt-10 m-auto overflow-visible mb-10"
              >
                <div className="relative rounded-3xl shadow-2xl ring-1 ring-black/5">
                  {/* CLIP DA IMAGEM */}
                  <div
                    className={`relative rounded-3xl overflow-hidden  ${image}`}
                  >
                    <img
                      src={content.texts.team.imgs.img1}
                      alt={content.texts.features.alt}
                      className="w-full h-full object-cover scale-105 hover:scale-100 rounded-2xl transition-transform duration-700 "
                      width={798}
                      height={798}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col-reverse desktop1:flex-row gap-4 desktop1:gap-16 items-center">
              {/* Conteúdo textual */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-8"
              >
                <div className="max-w-[1200px]">
                  <h1
                    className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 flex flex-wrap gap-2 ${text}`}
                  >
                    Dra. Carolina Vieira
                  </h1>
                  <p
                    className={`font-secondFont font-light text-sm tablet1:text-lg leading-relaxed ${textOpacity}`}
                  >
                    Sou Carolina Vieira, advogada previdenciarista, e minha
                    atuação é guiada por um olhar humano sobre o Direito.
                    Entendo que o momento de buscar um benefício quase sempre
                    vem acompanhado de incertezas, mudanças e preocupações que
                    vão muito além do processo.
                  </p>
                </div>
              </motion.div>

              {/* Imagem com destaque */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="relative w-full desktop1:max-w-[400px] mt-10 tablet1:mt-24 desktop1:mt-10 m-auto overflow-visible mb-10"
              >
                <div className="relative rounded-3xl shadow-2xl ring-1 ring-black/5">
                  {/* CLIP DA IMAGEM */}
                  <div
                    className={`relative rounded-3xl overflow-hidden  ${image}`}
                  >
                    <img
                      src={content.texts.team.imgs.img2}
                      alt={content.texts.team.imgs.alt}
                      className="w-full scale-105 hover:scale-100 transition-transform duration-700 rounded-[1rem]"
                      width={726}
                      height={726}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Modal */}
          <Dialog
            className="font-secondFont bg-white p-4 rounded-md"
            closeIcon={<X size={20} />}
            header={
              <span className="font-mainFont px-4">
                {content.texts.about.titleModal}
              </span>
            }
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: '50vw' }}
            breakpoints={{
              '4000px': '641px',
              '1024px': '641px',
              '641px': '85vw',
            }}
          ></Dialog>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default TeamSectionNew
