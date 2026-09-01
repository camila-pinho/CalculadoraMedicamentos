# Calculadora de Medicamentos

Ferramenta web para cálculo de dose de medicação e taxa de gotejamento de infusões intravenosas.

## Sobre o projeto

Esse cálculo faz parte da rotina diária de quem trabalha na enfermagem: converter uma prescrição em volume a administrar, ou definir a velocidade de gotejamento de um soro, várias vezes por plantão. Normalmente isso é feito de cabeça ou numa calculadora comum, sem nenhum apoio visual.

Este projeto propõe uma interface simples para os dois cálculos mais usados nesse contexto, com retorno visual imediato do resultado.

## Funcionalidades

- Cálculo de dose a partir da dose prescrita, concentração disponível e volume da apresentação
- Cálculo de taxa de gotejamento em gotas por minuto e mL por hora, para equipos macrogotas ou microgotas
- Simulação visual da câmara de gotejamento, com a velocidade da animação ajustada ao resultado calculado

## Tecnologias

HTML, CSS e JavaScript, sem frameworks ou bibliotecas externas.

## Como executar

Não há build nem dependências. Basta abrir o arquivo `index.html` em um navegador, ou acessar a versão publicada:

```
https://camila-pinho.github.io/CalculadoraMedicamentos
```

## Estrutura do projeto

```
index.html   estrutura da página
style.css    estilos
script.js    lógica de cálculo
```

## Fórmulas utilizadas

Dose a administrar (mL):

```
(dose prescrita / concentração disponível) × volume da apresentação
```

Gotejamento:

```
mL/h = volume total / tempo de infusão (h)
gtt/min (macrogotas) = volume total / (tempo de infusão em h × 3)
gtt/min (microgotas) = mL/h
```

## Aviso

Ferramenta de apoio ao cálculo. Não substitui a conferência clínica da equipe responsável.

## Autora

Camila Pinho — enfermeira e estudante de Análise e Desenvolvimento de Sistemas.

[linkedin.com/in/camila-hevelin-475785138](https://www.linkedin.com/in/camila-hevelin-475785138) · [github.com/camila-pinho](https://github.com/camila-pinho)
