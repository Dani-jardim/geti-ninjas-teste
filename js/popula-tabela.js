window.onload = () => {
	mostrarFormulario();
}
pegarFormulario = () => {
	return data["request_fields"];
}

mostrarFormulario = () => {
	document.querySelector("#formGetninjas").innerHTML = `
  ${
		pegarFormulario().map((request_fields) => `

			 <form action="#" method="post">
					<h2>Explique os que você precisa</h2>
					<p>Peça orçamento grátis, online!</p>
					<div class="question1">
					<label class="title_question">${request_fields.label}</label>
						<select id="" name="${request_fields.name}" class="" required="">
							<option value="">${request_fields.name}</option>
							<option value="">${request_fields.escova}</option>
							<option value="">${request_fields.value}</option>
							<option value="">${request_fields.value}</option>
						</select>
					</div>

					<div class="question2">
						<label class="title_question">${request_fields.name}</label>
						<input type="checkbox" id="coloracao" value="coloracao" name="user_interest">
							<label class="check"for="coloracao">${request_fields.name}</label>
						<br>
						<input type="checkbox" id="corte" value="corte" name="user_interest">
							<label class="check"for="corte">Corte</label>
						<br>
						<input type="checkbox" id="escova" value="escova" name="user_interest">
							<label class="check" for="escova">Escova</label>
						<br>
						<input type="checkbox" id="escova" value="escova" name="user_interest">
							<label class="check" for="escova">Escova Progressiva/definitida</label>
						<br>
						<input type="checkbox" id="luzes" value="luzes" name="user_interest">
							<label class="check" for="luzes">Luzes</label>
						<br>
						<input type="checkbox" id="manicure" value="manicure" name="user_interest">
							<label class="check" for="manicure">Manicure</label>
						<br>
						<input type="checkbox" id="pedicure" value="pedicure" name="user_interest">
							<label class="check" for="pedicure">Pedicure</label>
						<br>
						<input type="checkbox" id="penteado" value="penteado" name="user_interest">
							<label class="check" for="penteado">Penteado</label>
						<br>
						<input type="checkbox" id="outros" value="outros" name="user_interest">
							<label class="check" for="outros">
								<input type="text" id="outros" name="outros_servicos">
							</label>
						<br>
					</div>

						<div class="question3">
							<label class="title_question">Para quem é o serviço?</label>
							<input type="checkbox" id="madrinha" value="madrinha" name="user_interest">
								<label class="check" for="madrinha">Madrinha/formanda</label>
							<br>
							<input type="checkbox" id="noiva" value="noiva" name="user_interest">
								<label class="check" for="noiva">Noiva</label>
							<br>
							<input type="checkbox" id="crianca" value="crianca" name="user_interest">
								<label class="check" for="crianca">Criança</label>
							<br>
							<input type="checkbox" id="homem" value="homem" name="user_interest">
								<label class="check" for="homem">Homem</label>
							<br>
							<input type="checkbox" id="mulher" value="mulher" name="user_interest">
								<label class="check" for="mulher">Mulher</label>
							<br>
						</div>

						<div class="question4">
							<label class="title_question">Indique o número de pessoas?</label>
							<select id="" name="O serviço será para quantas pessoas?" class="" required="">
								<option value="">indique o número de pessoas</option>
								<option value="">1</option>
								<option value="">2</option>
								<option value="">Mais de 3</option>
							</select>
						</div>
						
						<div class="question5">
							<label class="title_question">Indique o prazo do serviço?</label>
						<select id="" name="Para quando você precisa deste serviço?" class="" required="">
							<option value="">Indique o prazo do serviço</option>
							<option value="">Ainda não tenho certeza</option>
							<option value="">Hoje ou nos próximos dias</option>
							<option value="">Para as próximas semanas</option>
							<option value="">Para este mês</option>
							<option value="">Para os próximos meses</option>
						</select>
						</div>
					<button type="submit">Buscar profissionais</button>
				</form> 
	
    `
		).join("")
		}
`
}


