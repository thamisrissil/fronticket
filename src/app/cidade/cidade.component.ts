import { Component, OnInit } from '@angular/core';
import { CidadeServiceService } from '../shared/cidade-service.service';
import { Cidade } from '../shared/cidade.model';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  cidade = new Cidade
  cidadeList: Cidade[] = []

  constructor(private cidadeService: CidadeServiceService) { }

  ngOnInit(): void {
    this.setCidadeList();
  }

  salvarCidade() {
    console.log(this.cidade);
    this.cidadeService.saveCidade(this.cidade).subscribe((resp: Cidade) => {
      console.log(resp);
    });
  }

  setCidadeList() {
    this.cidadeService.getCidade().subscribe((res: Cidade[]) => {
      this.cidadeList = res;
    });
    console.log(this.cidadeList);
  }

}
