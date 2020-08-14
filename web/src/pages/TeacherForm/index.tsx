import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

function TeacherForm() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsApp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preecher o formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }} // "e" significa "evento"
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsApp(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Química", label: "Química" },
                { value: "Física", label: "Física" },
                { value: "Educação Física", label: "Educação Física" },
                { value: "Geografia", label: "Geografia" },
                { value: "Hidtória", label: "Hidtória" },
                { value: "Matemática", label: "Matemática" },
                { value: "Português", label: "Português" },
                { value: "Inglês", label: "Inglês" },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>
          </fieldset>

          {scheduleItems.map((scheduleItem) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="subject"
                  label="Matéria"
                  options={[
                    { value: "Artes", label: "Artes" },
                    { value: "Biologia", label: "Biologia" },
                    { value: "Química", label: "Química" },
                    { value: "Física", label: "Física" },
                    { value: "Educação Física", label: "Educação Física" },
                    { value: "Geografia", label: "Geografia" },
                    { value: "Hidtória", label: "Hidtória" },
                    { value: "Matemática", label: "Matemática" },
                    { value: "Português", label: "Português" },
                    { value: "Inglês", label: "Inglês" },
                  ]}
                />

                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
