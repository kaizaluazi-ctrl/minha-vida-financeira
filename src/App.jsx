import React, { useState } from 'react';
import { 
  Wallet, TrendingDown, TrendingUp, Calendar, Target, 
  Sparkles, ShieldAlert, HeartHandshake, Stethoscope, 
  PlusCircle, CheckCircle, AlertCircle, ShoppingBag, BookOpen,
  PieChart as PieChartIcon, Lightbulb, ChevronRight, Check, X, ShieldCheck
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [unemployedMode, setUnemployedMode] = useState(false);
  const [balance, setBalance] = useState(1650.00);
  const [income, setIncome] = useState(3500.00);
  const [expenses, setExpenses] = useState(1850.00);
  const [emergencyFund, setEmergencyFund] = useState(4200.00);
  const [emergencyTarget, setEmergencyTarget] = useState(12000.00);

  const [bills, setBills] = useState([
    { id: 1, title: 'Internet Casa', amount: 120.00, dueDate: '2026-10-10', status: 'pending' },
    { id: 2, title: 'Energia elétrica', amount: 185.00, dueDate: '2026-10-15', status: 'pending' },
    { id: 3, title: 'Assinatura Pet', amount: 45.00, dueDate: '2026-10-05', status: 'paid' }
  ]);

  const categories = [
    { name: 'Faculdade 🎓', spent: 500, limit: 500 },
    { name: 'Alimentação 🍔', spent: 380, limit: 400 },
    { name: 'Transporte 🚌', spent: 220, limit: 250 },
    { name: 'Cuidados pessoais 💅', spent: 180, limit: 150 },
    { name: 'Lazer 🎉', spent: 120, limit: 150 },
  ];

  const [impulseDesc, setImpulseDesc] = useState('');
  const [impulseAmount, setImpulseAmount] = useState('');
  const [impulseAnswers, setImpulseAnswers] = useState({ q1: null, q2: null });
  const [impulseResult, setImpulseResult] = useState(null);

  const handleImpulseCheck = () => {
    if (!impulseAmount || !impulseDesc) return;
    const isImpulse = impulseAnswers.q1 === 'no' || impulseAnswers.q2 === 'no';
    setImpulseResult(isImpulse ? 'impulse' : 'planned');
  };

  const toggleBillStatus = (id) => {
    setBills(bills.map(b => b.id === id ? { ...b, status: b.status === 'paid' ? 'pending' : 'paid' } : b));
  };

  return (
    <div className="min-h-screen bg-rose-50/40 text-slate-700 font-sans">
      <header className="bg-white/80 backdrop-blur-md border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-rose-400 text-white flex items-center justify-center font-bold text-base shadow-sm">
              🌸
            </div>
            <div>
              <h1 className="font-semibold text-rose-950 text-base leading-tight">Minha Vida Financeira</h1>
              <p className="text-[11px] text-rose-400">Vamos cuidar do seu dinheiro hoje? 💰</p>
            </div>
          </div>
          
          <button 
            onClick={() => setUnemployedMode(!unemployedMode)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border flex items-center gap-1.5 ${
              unemployedMode 
                ? 'bg-amber-100 text-amber-800 border-amber-300 shadow-sm' 
                : 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            {unemployedMode ? 'Modo Proteção Ativo' : 'Modo Desempregada'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {unemployedMode && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 shadow-sm">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 space-y-1">
              <h3 className="font-semibold text-sm text-amber-950">Modo de Acolhimento Ativo</h3>
              <p>O foco agora é fazer seu dinheiro durar. Seu saldo atual de <strong>R$ {balance.toFixed(2)}</strong> garante aproximadamente <strong>2,4 meses de tranquilidade</strong>.</p>
            </div>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-sm">
                <span className="text-[11px] font-medium text-slate-400">Saldo Disponível</span>
                <p className="text-xl font-bold text-rose-950 mt-1">R$ {balance.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-sm">
                <span className="text-[11px] font-medium text-slate-400">Entradas do Mês</span>
                <p className="text-xl font-bold text-emerald-600 mt-1">R$ {income.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-sm">
                <span className="text-[11px] font-medium text-slate-400">Gastos do Mês</span>
                <p className="text-xl font-bold text-rose-500 mt-1">R$ {expenses.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-sm">
                <span className="text-[11px] font-medium text-slate-400">Ainda posso gastar</span>
                <p className="text-xl font-bold text-violet-600 mt-1">R$ {(income - expenses).toFixed(2)}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-4 rounded-2xl border border-rose-200 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-rose-900 text-sm flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 text-rose-500" /> Pensando em comprar algo?
                </h3>
                <p className="text-xs text-rose-700 mt-0.5">Use o teste reflexivo antes de passar o cartão.</p>
              </div>
              <button 
                onClick={() => setActiveTab('impulse')}
                className="px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold rounded-xl shadow-sm transition-all"
              >
                Refletir Agora
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm space-y-4">
              <h3 className="font-semibold text-slate-800 text-sm">Orçamento do Mês</h3>
              <div className="space-y-3">
                {categories.map((cat, idx) => {
                  const percent = Math.min(100, Math.round((cat.spent / cat.limit) * 100));
                  const isOver = cat.spent > cat.limit;
                  const isNear = cat.spent >= cat.limit * 0.85 && !isOver;

                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-slate-700">{cat.name}</span>
                        <span>R$ {cat.spent} / R$ {cat.limit}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${isOver ? 'bg-rose-500' : isNear ? 'bg-amber-400' : 'bg-emerald-400'}`} 
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm space-y-3">
              <h3 className="font-semibold text-slate-800 text-sm">Próximos Vencimentos</h3>
              <div className="divide-y divide-rose-50">
                {bills.map(bill => (
                  <div key={bill.id} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-medium text-slate-700">{bill.title}</p>
                      <p className="text-[10px] text-slate-400">Vence em {bill.dueDate}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-slate-700">R$ {bill.amount.toFixed(2)}</span>
                      <button 
                        onClick={() => toggleBillStatus(bill.id)}
                        className={`p-1.5 rounded-lg text-xs flex items-center gap-1 ${
                          bill.status === 'paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                        }`}
                      >
                        {bill.status === 'paid' ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                        {bill.status === 'paid' ? 'Pago' : 'Pendente'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'impulse' && (
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm max-w-lg mx-auto space-y-5">
            <div className="text-center space-y-1">
              <h2 className="text-lg font-bold text-rose-950">Eu realmente preciso disso? 🤔</h2>
              <p className="text-xs text-slate-500">Decida de forma consciente sem culpas.</p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-600">O que você quer comprar?</label>
                <input 
                  type="text" 
                  placeholder="Ex: Tênis novo, maquiagem..."
                  value={impulseDesc}
                  onChange={(e) => setImpulseDesc(e.target.value)}
                  className="w-full mt-1 p-2.5 border border-rose-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-600">Valor (R$)</label>
                <input 
                  type="number" 
                  placeholder="0,00"
                  value={impulseAmount}
                  onChange={(e) => setImpulseAmount(e.target.value)}
                  className="w-full mt-1 p-2.5 border border-rose-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>

              <div className="pt-2 space-y-2">
                <div className="bg-rose-50/50 p-3 rounded-xl border border-rose-100 text-xs space-y-1">
                  <p className="text-slate-700">Você já tinha planejado essa compra com antecedência?</p>
                  <div className="flex gap-2 pt-1">
                    <button 
                      onClick={() => setImpulseAnswers({...impulseAnswers, q1: 'yes'})}
                      className={`px-3 py-1 rounded-lg border text-xs ${impulseAnswers.q1 === 'yes' ? 'bg-rose-500 text-white' : 'bg-white'}`}
                    >Sim</button>
                    <button 
                      onClick={() => setImpulseAnswers({...impulseAnswers, q1: 'no'})}
                      className={`px-3 py-1 rounded-lg border text-xs ${impulseAnswers.q1 === 'no' ? 'bg-rose-500 text-white' : 'bg-white'}`}
                    >Não</button>
                  </div>
                </div>

                <div className="bg-rose-50/50 p-3 rounded-xl border border-rose-100 text-xs space-y-1">
                  <p className="text-slate-700">Pode esperar 3 dias para ver se ainda vai querer?</p>
                  <div className="flex gap-2 pt-1">
                    <button 
                      onClick={() => setImpulseAnswers({...impulseAnswers, q2: 'yes'})}
                      className={`px-3 py-1 rounded-lg border text-xs ${impulseAnswers.q2 === 'yes' ? 'bg-rose-500 text-white' : 'bg-white'}`}
                    >Sim</button>
                    <button 
                      onClick={() => setImpulseAnswers({...impulseAnswers, q2: 'no'})}
                      className={`px-3 py-1 rounded-lg border text-xs ${impulseAnswers.q2 === 'no' ? 'bg-rose-500 text-white' : 'bg-white'}`}
                    >Não</button>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleImpulseCheck}
                className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl text-xs shadow-md transition-all mt-3"
              >
                Analisar Compra
              </button>

              {impulseResult && (
                <div className={`p-4 rounded-xl text-xs space-y-2 mt-4 ${
                  impulseResult === 'impulse' ? 'bg-amber-50 border border-amber-200 text-amber-900' : 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                }`}>
                  <p className="font-semibold text-sm">
                    {impulseResult === 'impulse' ? '💡 Que tal esperar um pouco?' : '✨ Compra Consciente!'}
                  </p>
                  <p>
                    {impulseResult === 'impulse' 
                      ? `Essa compra de R$ ${impulseAmount} parece um gasto por impulso. Guarde para o seu Futuro Pet Shop 🐾!`
                      : `Compra planejada e dentro do seu orçamento!`
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'business' && (
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-rose-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-800">Meu Futuro Negócio 🐾</h2>
                <p className="text-xs text-slate-400">Clínica Veterinária + Pet Shop</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                <span className="text-[11px] text-slate-500">Investimento Inicial</span>
                <p className="text-lg font-bold text-rose-950 mt-1">R$ 85.000,00</p>
              </div>
              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                <span className="text-[11px] text-slate-500">Custo Mensal</span>
                <p className="text-lg font-bold text-slate-800 mt-1">R$ 12.400,00</p>
              </div>
              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                <span className="text-[11px] text-slate-500">Faturamento Meta</span>
                <p className="text-lg font-bold text-emerald-600 mt-1">R$ 28.000,00</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'goals' && (
          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-800 text-sm">Reserva de Emergência 💰</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Guardado: R$ {emergencyFund.toFixed(2)}</span>
                <span className="font-semibold text-rose-500">Meta: R$ {emergencyTarget.toFixed(2)}</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-rose-400 h-full" style={{ width: `${(emergencyFund / emergencyTarget) * 100}%` }} />
              </div>
            </div>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur-md border-t border-rose-100 py-2.5 px-4 z-40">
        <div className="max-w-sm mx-auto flex justify-between items-center text-[10px] font-medium text-slate-400">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'dashboard' ? 'text-rose-500 font-semibold' : ''}`}
          >
            <Wallet className="w-5 h-5" /> Início
          </button>
          <button 
            onClick={() => setActiveTab('impulse')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'impulse' ? 'text-rose-500 font-semibold' : ''}`}
          >
            <ShoppingBag className="w-5 h-5" /> Anti-Impulso
          </button>
          <button 
            onClick={() => setActiveTab('business')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'business' ? 'text-rose-500 font-semibold' : ''}`}
          >
            <Stethoscope className="w-5 h-5" /> Meu Negócio
          </button>
          <button 
            onClick={() => setActiveTab('goals')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'goals' ? 'text-rose-500 font-semibold' : ''}`}
          >
            <Target className="w-5 h-5" /> Metas
          </button>
        </div>
      </nav>
    </div>
  );
}
