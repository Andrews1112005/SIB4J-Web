import CardDetail from "./_components_detaildestination/cards";

export default function DetailDestination()
{
    return(
        <div className="bg-green-200 h-screen flex flex-row justify-center items-center text-black-300" >
            <CardDetail name="Kamis, 14 Mei 2026" description="IDR 4.837.400" />
            <CardDetail name="Jumat, 15 Mei 2026" description="IDR 3.027.365" />
            <CardDetail name="Sabtu, 16 Mei 2026" description="IDR 4.500.300" />
            <CardDetail name="Minggu, 17 Mei 2026" description="IDR 5.900.000" />
            <CardDetail name="Senin, 18 Mei 2026" description="IDR 2.677.800" />
            <CardDetail name="Selasa, 19 Mei 2026" description="IDR 2.567.800" />
            <CardDetail name="Rabu, 20 Mei 2026" description="IDR 2.567.800" />
        </div>
        
    )
}