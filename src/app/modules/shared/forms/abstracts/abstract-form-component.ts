export abstract class AbstractFormComponent{
  public getCanDeactivateMessage = () => {
    return 'Deseja mesmo sair do formulário? As informações inseridas até o momento serão perdidas.';
  };

  public isDirty(): boolean {
    return true;
  }
}
