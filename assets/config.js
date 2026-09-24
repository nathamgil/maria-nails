/* =====================================================================
   Maria Nails — configuração
   Único arquivo que precisa ser editado para o site sair do modo de
   demonstração e entrar no ar de verdade.
   ===================================================================== */

window.TV = {

  /* ---- Negócio ---------------------------------------------------- */
  nome:       'Maria Nails',
  slogan:     'Alongamentos com durabilidade',
  instagram:  '_maria.naiils',

  // WhatsApp em formato internacional, só dígitos. É o número por trás do
  // link wa.me/message/FIJXXXEWLIV6O1 da bio ("Maria eduarda • Nail Desing"),
  // conferido em 23/09/2026.
  whatsapp:        '557192468672',
  whatsappVisivel: '(71) 99246-8672',

  // A CONFIRMAR: a bio só diz "Salvador, BA". O endereço está no destaque
  // "Localização" do Instagram, que não deu para ler.
  endereco: {
    linha1: 'Salvador — BA',
    linha2: 'Endereço completo enviado no WhatsApp',
    maps:   'https://www.google.com/maps/search/?api=1&query=Salvador+BA',
    busca:  'Salvador - BA'
  },

  /* ---- Supabase ---------------------------------------------------
     Enquanto estes dois campos estiverem vazios, o site roda em MODO
     DEMONSTRAÇÃO: a agenda funciona de verdade na tela, mas os horários
     ficam guardados só no navegador de quem está olhando.

     Para ligar de verdade:
       1. supabase.com  ->  New project (região: South America / São Paulo)
       2. SQL Editor    ->  cole e rode db/schema.sql inteiro
       3. Settings > API -> copie "Project URL" e a chave "anon public"
       4. cole abaixo e suba pro GitHub

     A chave anon é pública por natureza — ela aparece no código do site.
     Quem protege os dados é o RLS + as funções do schema.sql, não ela.
  ------------------------------------------------------------------ */
  supabaseUrl: '',
  supabaseKey: '',

  /* ---- Regras da agenda (espelham o db/schema.sql) ----------------
     Mudou aqui? Mude no banco também — o banco é quem manda de verdade.
  ------------------------------------------------------------------ */
  regras: {
    passoMin:        30,   // grade de meia em meia hora
    antecedenciaMin: 30,   // não dá para marcar para daqui a 20 min
    janelaDias:      30,   // até 30 dias à frente
    cancelamentoH:   2     // cancela sozinho até 2h antes
  },

  /* ---- Expediente (0 = domingo) ------------------------------------
     A CONFIRMAR: hoje a agenda é só pelo WhatsApp e o horário não aparece
     em lugar nenhum. Seg a sáb, 9h às 19h é provisório.
  ------------------------------------------------------------------ */
  expediente: {
    0: { aberto: false },
    1: { aberto: true, abre: '09:00', fecha: '19:00' },
    2: { aberto: true, abre: '09:00', fecha: '19:00' },
    3: { aberto: true, abre: '09:00', fecha: '19:00' },
    4: { aberto: true, abre: '09:00', fecha: '19:00' },
    5: { aberto: true, abre: '09:00', fecha: '19:00' },
    6: { aberto: true, abre: '09:00', fecha: '19:00' }
  },

  /* ---- Dados usados no modo demonstração --------------------------
     No ar de verdade, profissional e serviços vêm do banco, não daqui.
     Profissional única: com uma pessoa só, o passo "com quem" some
     sozinho e a agenda já começa no serviço.
     (O nome "barbeirosDemo" é interno do motor da agenda e ficou assim.)
  ------------------------------------------------------------------ */
  barbeirosDemo: [
    { id:'maria', slug:'maria', nome:'Maria Eduarda', cargo:'Nail designer', foto:'fotos/maria.jpg', instagram:'_maria.naiils' }
  ],

  // A CONFIRMAR: a Maria não publica tabela de preços (atende pelo WhatsApp).
  // Serviços típicos de alongamento, sem preço (preco_centavos 0 = "sob
  // consulta") e com duração estimada.
  servicosDemo: [
    { id:'fibra',       nome:'Alongamento em fibra de vidro', descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:150, categoria:'Alongamento' },
    { id:'gel-f1',      nome:'Alongamento em gel (molde F1)', descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:150, categoria:'Alongamento' },
    { id:'manutencao',  nome:'Manutenção do alongamento',     descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:90,  categoria:'Manutenção' },
    { id:'esmaltacao-gel', nome:'Esmaltação em gel',          descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:60,  categoria:'Esmaltação' },
    { id:'remocao',     nome:'Remoção',                       descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:30,  categoria:'Remoção' }
  ]
};

window.TV.modoDemo = !(window.TV.supabaseUrl && window.TV.supabaseKey);
