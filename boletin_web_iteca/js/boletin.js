$('[name="dob"]').formatter({
	pattern: '{{99}}-{{99}}-{{9999}}'
});

function enviar() {
	var ci = $('[name="ci"]').val().trim();
	var dob = $('[name="dob"]').val().trim();

	if (ci === "13341776" && dob === "19-03-2006") {
		$('#modal_bienvenida').modal('show');

		$('#modal_bienvenida').on('hidden.bs.modal', function () {
			$('#modal_large').modal('show');

			$('#boletin').html(`
<p><strong>Nombre completo:</strong> YUJRA GUEVARA, NESTOR FERNANDO</p>
<p><strong>Carrera:</strong> CONTADURÍA GENERAL</p>
<div style="overflow-x: auto;">
<table class="table table-bordered" style="min-width: 900px;">
	<thead style="background:#FF6600; color:#fff;">
		<tr>
			<th>Sigla</th>
			<th>Materia</th>
			<th>Curso</th>
			<th>Paralelo</th>
			<th>1B</th>
			<th>2B</th>
			<th>3B</th>
			<th>4B</th>
			<th>NF</th>
			<th>SI</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>LSA-105</td><td>LEGISLACIÓN LABORAL Y SEGURIDAD SOCIAL APLICADA</td><td>1</td><td>1C</td><td>52</td><td>61</td><td>64</td><td>69</td><td>0</td><td>0</td></tr>
		<tr><td>INT-109</td><td>INGLÉS TÉCNICO                                 </td><td>1</td><td>1C</td><td>50</td><td>62</td><td>67</td><td>66</td><td>0</td><td>0</td></tr>
		<tr><td>CON-101</td><td>CONTABILIDAD I                                 </td><td>1</td><td>1C</td><td>61</td><td>65</td><td>63</td><td>65</td><td>0</td><td>0</td></tr>
		<tr><td>MAF-102</td><td>MATEMÁTICA FINANCIERA                          </td><td>1</td><td>1C</td><td>49</td><td>64</td><td>65</td><td>67</td><td>0</td><td>0</td></tr>
		<tr><td>ICO-103</td><td>INFORMÁTICA CONTABLE                           </td><td>1</td><td>1C</td><td>59</td><td>65</td><td>61</td><td>64</td><td>0</td><td>0</td></tr>
		<tr><td>EGA-106</td><td>ECONOMÍA GENERAL APLICADA                      </td><td>1</td><td>1C</td><td>61</td><td>61</td><td>62</td><td>63</td><td>0</td><td>0</td></tr>
		<tr><td>DCM-107</td><td>DOCUMENTOS COMERCIALES Y MERCANTILES           </td><td>1</td><td>1C</td><td>68</td><td>66</td><td>60</td><td>61</td><td>0</td><td>0</td></tr>
		<tr><td>ESA-108</td><td>ESTADÍSTICA APLICADA                           </td><td>1</td><td>1C</td><td>61</td><td>67</td><td>65</td><td>63</td><td>0</td><td>0</td></tr>
		<tr><td>ADG-104</td><td>ADMINISTRACIÓN GENERAL                         </td><td>1</td><td>1C</td><td>54</td><td>60</td><td>63</td><td>69</td><td>0</td><td>0</td></tr>
	</tbody>
</table>
</div>
			`);

			// Calcular promedio NF (1B + 2B + 3B + 4B) / 4
			$('#boletin table tbody tr').each(function () {
				let $tds = $(this).find('td');
				let sum = 0;

				for (let i = 4; i <= 7; i++) {
					let val = parseInt($tds.eq(i).text());
					sum += isNaN(val) ? 0 : val;
				}

				let nf = Math.round(sum / 4);
				$tds.eq(8).text(nf);
			});
		});

		$('#error').hide();
	} else {
		$('#error').show().html('<div class="alert alert-danger text-center">CI o contraseña incorrecta.</div>');
	}
}
